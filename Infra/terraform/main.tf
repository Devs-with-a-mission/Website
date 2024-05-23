module "new-vpc" {
  source         = "./modules/Network-standard"
  prefix         = var.prefix
  vpc_cidr_block = var.vpc_cidr_block
}
