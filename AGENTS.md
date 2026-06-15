# AGENTS.md

This file provides guidance to AI Coding Agents when working with code in this repository.

## 言語設定

このプロジェクトは日本語環境での動作を前提としています。

- コミュニケーションは日本語で行うこと
- コードコメントは日本語で記述すること
- README・設計文書・技術文書は日本語で作成すること
- エラーメッセージは可能な限り日本語で表示すること
- 変数名・関数名・型名・ファイル名は英語を使用すること

## プロジェクトの目的

このサイトはReactで作成されたポートフォリオサイトです。

## 現在の状況
Vercelにデプロイしようとしたところ、以下のエラーが出てビルドに失敗しアップロードできなくなってしまいました。
必要なマイグレーションを行い、コンパイル可能な状況にしてVercelで再度ビルドできるようにしてください。

```
01:32:05.451 
Running build in Washington, D.C., USA (East) – iad1
01:32:05.451 
Build machine configuration: 2 cores, 8 GB
01:32:05.574 
Cloning github.com/sifue/react-frontend-dev-portfolio (Branch: main, Commit: 6124727)
01:32:05.575 
Previous build caches not available.
01:32:06.006 
Cloning completed: 432.000ms
01:32:06.359 
Running "vercel build"
01:32:06.379 
Vercel CLI 54.12.2
01:32:06.933 
Warning: Due to "engines": { "node": ">22.0.0" } in your `package.json` file, the Node.js Version defined in your Project Settings ("16.x") will not apply, Node.js Version "24.x" will be used instead. Learn More: https://vercel.link/node-version
01:32:06.934 
Warning: Detected "engines": { "node": ">22.0.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: https://vercel.link/node-version
01:32:06.986 
Installing dependencies...
01:32:10.742 
npm warn deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
01:32:10.854 
npm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
01:32:11.122 
npm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
01:32:11.123 
npm warn deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
01:32:11.168 
npm warn deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
01:32:11.302 
npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
01:32:11.305 
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
01:32:11.355 
npm warn deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
01:32:11.360 
npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
01:32:11.543 
npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
01:32:11.543 
npm warn deprecated
```

