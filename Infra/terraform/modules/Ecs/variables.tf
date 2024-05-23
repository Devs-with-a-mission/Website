variable "cluster_name" {
  description = "Name of the ECS cluster"
  type        = string
}

variable "task_definition" {
  description = "Task definition for the ECS service"
  type        = string
}

variable "service_name" {
  description = "Name of the ECS service"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID where the ECS cluster is deployed"
  type        = string
}

variable "subnets" {
  description = "List of subnet IDs where the ECS service is deployed"
  type        = list(string)
}

variable "container_port" {
  description = "Port on which the container is listening"
  type        = number
}

variable "desired_count" {
  description = "Number of desired instances"
  type        = number
  default     = 1
}

variable "region" {
  description = "region of aws"
  type        = string
}