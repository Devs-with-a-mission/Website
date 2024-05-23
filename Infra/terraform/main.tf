module "new-vpc" {
  source         = "./modules/Network-standard"
  prefix         = var.prefix
  vpc_cidr_block = var.vpc_cidr_block
}
module "ecs" {
  source          = "./modules/Ecs"
  cluster_name    = "${var.prefix}-ecs"
  service_name    = "${var.prefix}-service"
  task_definition = "${var.prefix}-task"
  vpc_id          = module.new-vpc.vpc_id
  subnets         = module.new-vpc.subnet_ids
  container_port  = 80
  desired_count   = 2
  region          = "us-east-1"

  depends_on = [
    module.new-vpc
  ]
}
