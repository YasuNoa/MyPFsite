
  -- 拡張機能の有効化
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  -- UUID生成用

  -- スキーマの作成（必要に応じて）
  CREATE SCHEMA IF NOT EXISTS app;
        -- アプリケーション用スキーマ

  -- 権限の設定
  GRANT ALL ON SCHEMA app TO CURRENT_USER; 