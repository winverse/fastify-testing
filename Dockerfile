FROM node:18

WORKDIR /usr/app

RUN npm install -g pnpm@8.6.0

COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install 

COPY . .

EXPOSE 8080

RUN chmod +x scripts/docker-entrypoint.sh 
ENTRYPOINT ["sh","/usr/app/scripts/docker-entrypoint.sh"]