import { ethers } from "hardhat";
import { getImplementationAddress } from '@openzeppelin/upgrades-core';
const hre = require("hardhat");

async function verify(address: string, args: any) {
  try {
    await hre.run("verify:verify", {
      address,
      constructorArguments: args,
    });
  } catch (e) {
    const msg = (e as Error).message;
    if (msg.includes('Contract source code already verified')) {
      console.log(`Contract [${address}] source code already verified`);
    } else {
      throw e;
    }
  }

}

async function main() {
  // const encodedParams = ethers.AbiCoder.defaultAbiCoder().encode(['address'], ['0x4200000000000000000000000000000000000018']);
  // console.log(encodedParams)
  // const proxyAdmin = '0xE4925bD8Ac30b2d4e2bD7b8Ba495a5c92d4c5156';
  const proxyAdmin = '0x4200000000000000000000000000000000000018';
  // https://docs.bnbchain.org/opbnb-docs/docs/core-concepts/cross-chain

  // await verify('0xc0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d30015', []);
  // await verify('0x4200000000000000000000000000000000000020', [proxyAdmin]);

  // const l1BlockAddr = '0x4200000000000000000000000000000000000015';
  // const L1Block = await ethers.getContractFactory('L1Block');
  // const l1Block = await L1Block.attach(l1BlockAddr);
  //
  // const l1BlockNumber = await l1Block.basefee();
  // console.log('l1BlockNumber', l1BlockNumber.toString());
  // const l1FeeOverhead = await l1Block.l1FeeOverhead();
  // console.log('l1FeeOverhead', l1FeeOverhead.toString());

  const proxyAddress = '0x4200000000000000000000000000000000000015';
  const currentImplAddress = await getImplementationAddress(ethers.provider, proxyAddress);
  console.log('currentImplAddress', currentImplAddress);
  await verify(currentImplAddress, []);


  // console.log('L1Block');
  // await verify('0x4200000000000000000000000000000000000015', [proxyAdmin]);
  // console.log('WETH9');
  // await verify('0x4200000000000000000000000000000000000006', []);
  // console.log('LegacyMessagePasser');
  // await verify('0x4200000000000000000000000000000000000000', [proxyAdmin]);
  // console.log('L2ToL1MessagePasser');
  // await verify('0x4200000000000000000000000000000000000016', [proxyAdmin]);
  // console.log('DeployerWhitelist');
  // await verify('0x4200000000000000000000000000000000000002', [proxyAdmin]);
  // console.log('L2CrossDomainMessenger');
  // await verify('0x4200000000000000000000000000000000000007', [proxyAdmin]);
  // console.log('L2StandardBridge');
  // await verify('0x4200000000000000000000000000000000000010', [proxyAdmin]);
  // console.log('L2ERC721Bridge');
  // await verify('0x4200000000000000000000000000000000000014', [proxyAdmin]);
  // console.log('L1BlockNumber');
  // await verify('0x4200000000000000000000000000000000000013', [proxyAdmin]);
  // console.log('GasPriceOracle');
  // await verify('0x420000000000000000000000000000000000000F', [proxyAdmin]);
  // console.log('ProxyAdmin');
  // await verify('0x4200000000000000000000000000000000000018', [proxyAdmin]);
  // console.log('SequencerFeeVault');
  // await verify('0x4200000000000000000000000000000000000011', [proxyAdmin]);
  // console.log('OptimismMintableERC20Factory');
  // await verify('0x4200000000000000000000000000000000000012', [proxyAdmin]);
  // console.log('OptimismMintableERC721Factory');
  // await verify('0x4200000000000000000000000000000000000017', [proxyAdmin]);
  // console.log('BaseFeeVault');
  // await verify('0x4200000000000000000000000000000000000019', [proxyAdmin]);
  // console.log('L1FeeVault');
  // await verify('0x420000000000000000000000000000000000001a', [proxyAdmin]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
