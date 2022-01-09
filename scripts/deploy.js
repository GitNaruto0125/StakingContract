async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const FPIGToken = await ethers.getContractFactory("FPIGToken");
  const fpig = await FPIGToken.deploy();

  console.log("FPIGToken Token address:", fpig.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
