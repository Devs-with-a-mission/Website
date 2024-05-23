output "ecs_cluster_id" {
  description = "The ECS cluster ID"
  value       = aws_ecs_cluster.cluster.id
}

output "ecs_service_name" {
  description = "The name of the ECS service"
  value       = aws_ecs_service.service.name
}

output "alb_dns_name" {
  description = "The DNS name of the ALB"
  value       = aws_lb.load_balancer.dns_name
}
