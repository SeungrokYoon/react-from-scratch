# syntax=docker/dockerfile:1
# Step 1: 기본 이미 구동을 위한 Node.js
FROM node:18-alpine

# Step 2: 이미지에서 구동할 폴더
WORKDIR /app

# Step 3: 패키지 정보 복사
COPY package.json yarn.lock ./

# Step 4: 패키지 설치
RUN yarn install

# Step 5: 나머지 프로젝트 파일을 복사
COPY . .

# Step 6: 해당 어플리케이션이 구동할 포트번호 열어주기
EXPOSE 3000

# Step 7: dev환경 구동하기
CMD ["yarn", "dev"]