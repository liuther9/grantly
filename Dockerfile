FROM node:16-alpine as deps

RUN apk add --no-cache libc6-compat