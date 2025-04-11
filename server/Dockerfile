FROM openjdk:latest
WORKDIR /server
COPY . .
CMD ["./mvnw", "package"]
EXPOSE 8080
CMD ["java", "-jar", "target/server.jar"]
