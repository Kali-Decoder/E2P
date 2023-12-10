import React, { createContext, useContext, useState, useEffect } from "react";

import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
import { usePublicClient, useAccount, useNetwork } from "wagmi";
import { useEthersSigner } from "../web3-services/signer.ts";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useAnonAadhaar } from "anon-aadhaar-react";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import jsPDF from "jspdf";
import {
  NFTAddress,
  NFTAbi,
  EnergyMarket,
  EnergyMarketAbi,
  LoyalityTokenAddress,
  UnitTokenAddress,
  LoyalityTokenABI,
} from "../web3-services/constant";
import { AnonAadhaarPCD, exportCallDataGroth16FromPCD } from "anon-aadhaar-pcd";

const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { chain } = useNetwork();
  const [anonAadhaar] = useAnonAadhaar();
  const [pcd, setPcd] = useState();
  useEffect(() => {
    if (anonAadhaar.status === "logged-in") setPcd(anonAadhaar.pcd);
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    console.log("Anon Aadhaar pcd: ", anonAadhaar.pcd);
  }, [anonAadhaar]);

  const [activeChain, setActiveChainId] = useState(chain?.id);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);
  const { address, isDisconnected } = useAccount();
  const signer = useEthersSigner(activeChain);
  const [verified, setVerified] = useState(false);
  const [user,setUser]=useState();
  const [confetti, setConfetti] = useState(false);
  const navigate = useNavigate();
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onLogin = async () => {
    setConfetti(true);
    await sleep(3 * 1000);
    setConfetti(false);
    navigate("/marketplace");
  };

  useEffect(() => {
    if (!signer) return;
  }, [signer, address]);

  function addQrCodeToPdf(qrCodeDataUrl, pdf) {
    const qrImg = new Image();
    qrImg.src = qrCodeDataUrl;

    // Define the position where you want to add the QR code (xPosition, yPosition)
    const xPosition = 450; // Example position (adjust as needed)
    const yPosition = 50; // Example position (adjust as needed)

    qrImg.onload = function () {
      const qrWidth = 60; // Set the width of the QR code image
      const qrHeight = (qrImg.height * qrWidth) / qrImg.width; // Maintain aspect ratio

      // Add QR code image to the PDF at a specific position
      pdf.addImage(
        qrCodeDataUrl,
        "PNG",
        xPosition,
        yPosition,
        qrWidth,
        qrHeight
      );

      // Save or display the PDF with the QR code
      pdf.save("invoice_with_qr.pdf"); // Save the PDF
      // OR
      // window.open(pdf.output('datauristring')); // Open the PDF in a new tab
    };
  }

  function GenerateInvoice() {
    let id = toast.loading("⏳ Generating QRCode ...", {
      theme: "dark",
      autoClose: true,
    });
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      toast.update(id, {
        render: " Generating Invoice... 🔓 !",
        type: "success",
        isLoading: true,
        theme: "dark",
        autoClose: true,
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Assuming you have a QR code data URL in qrCodeDataUrl variable
      const qrCodeDataUrl =
        "https://chart.googleapis.com/chart?cht=qr&chl=hello&chs=180x180&choe=UTF-8&chld=L|2"; // Replace with actual QR code data URL

      // Add QR code to the PDF
      addQrCodeToPdf(qrCodeDataUrl, pdf);
      toast.update(id, {
        render: " Adding QRCODE on invoice for Prrof... 🔓 !",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: true,
      });
    });
  }
  const getUserFullDteails = async () => {
    try {
      let contract = await getContractInstance(EnergyMarket, EnergyMarketAbi);
      console.log(contract);
      let user = {
       
      };
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!address) return;
    getUserFullDteails();
  },[])
  const registerUserUsingNFTVerification = async (walletAddress) => {
    try {
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      let balance = await nftInstance.balanceOf(walletAddress);
      balance = +balance.toString();
      let id = toast.loading("⏳ Verifying Doc $ NFT ...", {
        theme: "dark",
        autoClose: true,
      });

      if (balance < 1) {
        toast.update("⏳ Minting NFT for You ...", {
          theme: "dark",
          autoClose: true,
        });
        let tokenURI =
          "https://gateway.pinata.cloud/ipfs/QmZJX83NEmDtVrENDxkkEgEgfpRvdZgnfRSp3WCB4AGsAx";
        let tx = await nftInstance.mintNFT(walletAddress, tokenURI);
        await tx.wait(1);
        toast.update(id, {
          render: " NFT Unlocked 🔓 !",
          type: "success",
          isLoading: false,
          theme: "dark",
          autoClose: true,
        });
      }

      let res = await registerUser();
      if (res) {
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);
        await sleep(5000);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function registerUser(pcd) {
    let id = toast.loading("⏳ Verifying Aadhar Card ... ", {
      theme: "dark",
    });
    // const { a, b, c, Input } = await exportCallDataGroth16FromPCD(pcd);
    const contract = await getContractInstance(EnergyMarket, EnergyMarketAbi);
    const tokenContract = await getContractInstance(
      LoyalityTokenAddress,
      LoyalityTokenABI
    );
    
    try {
      const DECIMAL = BigNumber.from(10).pow(18);
      let approveTx = await tokenContract.approve(
        EnergyMarket,
        BigNumber.from(10).mul(DECIMAL)
      );
      // await approveTx.wait(2);
      // const transaction = await contract.registerUser(a, b, c, Input, {
      //   from: address,
      // });
      // await transaction.wait(2);

      toast.update(id, {
        render: "User Registered !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
      navigate("/auth");
      return true;
    } catch (error) {
      toast.update(id, {
        render: "User Registered Already !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
      console.log(error);
      return false;
    }
  }
  const getContractInstance = async (contractAddress, contractAbi) => {
    try {
      let contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract");
    }
  };
  const checkVerification = async (pasteAddress) => {
    let id = toast.loading("⏳ Checking for Verification... ", {
      theme: "dark",
    });
    try {
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      let contract = await getContractInstance(EnergyMarket, EnergyMarketAbi);

      let balance = await nftInstance.balanceOf(pasteAddress);
      balance = +balance.toString();

      let isExist = await contract.checkIsUser(pasteAddress);
      let isVerified = balance == 1 ? true : false;
      setVerified(isVerified && isExist);
      if (isVerified && isExist) {
        toast.update(id, {
          render: "Valid User !",
          type: "success",
          isLoading: false,
          theme: "dark",
          icon: " ✅ ",
          autoClose: true,
        });
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);

        await sleep(5000);
        window.location.href = "/";
      } else {
        toast.update(id, {
          render: "Not Valid User !",
          type: "info",
          isLoading: false,
          theme: "dark",
          icon: " ❌ ",
          autoClose: true,
          delay: 1000,
        });
        await sleep(3000);
        window.location.href = "/register-user";
      }
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: "Try Again !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  };
  return (
    <UserDataContext.Provider
      value={{
        registerUserUsingNFTVerification,
        confetti,
        onLogin,
        GenerateInvoice,
        registerUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);
