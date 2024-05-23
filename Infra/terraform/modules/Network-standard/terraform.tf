provider "aws" {
  region  = "us-east-1"
  profile = "default"
  default_tags {
    tags = {
      environment = "develop"
      project     = "devs-with-a-mission"
    }
  }
}
terraform {
  required_providers {
    aws = "~> 5.9"
  }

  required_version = ">=1.1.0" # Required terraform version
}