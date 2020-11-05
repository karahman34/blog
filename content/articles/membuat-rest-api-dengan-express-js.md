---
title: membuat rest api dengan express js (Real Content)
description: Belajar untuk membuat Rest API di Express JS
background: articleocw-57e57b89889ad.png
tags:
  - node
  - express
  - javasript
banner: true
---

# Membuat REST API dengan Express JS

Teman - teman pasti sudah tidak asing dengan namanya Express bukan ? yap,express js adalah salah satu backend frameworknya node js
yang terkenal.

Ok sekarang untuk memulai untuk membuat REST API kita,kita mulai dari membuat folder namanya terserah lalu buat file sebut saja "main.js" lalu kita mulai menginstall framework Express dengan cara membuka CMD / Terminal kalian lalu ketik:

> yarn add express

atau

> npm install express

Setelah selesai buka file "main.js" kamu di Code Editor kamu lalu kita mulai dengan menginisiasi express nya seperti ini:

```js{1,3-5}[main.js]
const express = require('express')

const app = express()
```

Setelah itu mari buat route pertama kita

```js{1,3-5}[main.js]
app.get('/', (req, res) => {
  return res.send('Hallo')
})
```

Lalu mari buat express untuk _listen_ ke _port_ kita

```js{1,3-5}[main.js]
app.listen(3000, () => {})
```

Lalu buka kembali CMD / Terminal lalu ketik

> node main.js

lalu buka browser kalian dan hasilnya akan jadi seperti ini:

![Contoh](/contents/xx.png)
