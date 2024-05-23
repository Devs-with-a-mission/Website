terraform {
  required_providers {
    aws = "~> 5.9"
  }
  backend "s3" {
    bucket = "s3-pedro-dev"
    key    = "infra-pedro"
    region = "us-east-1"
  }
  required_version = ">=1.1.0" # Required terraform version
}

provider "aws" {
  region  = "us-east-1"
  default_tags {
    tags = {
      environment = "develop"
      project     = "devs-with-a-mission"
    }
  }
}
