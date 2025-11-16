

FROM node:20-bookworm

WORKDIR /app

# Install Python and pip for Serena MCP
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install uv (Python package manager required for uvx)
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/root/.local/bin:$PATH"

# Pre-install Serena MCP to cache it in the image
RUN uvx --from git+https://github.com/oraios/serena serena --version || true

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]
