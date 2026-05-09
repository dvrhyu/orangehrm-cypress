# OrangeHRM Cypress Automation Testing

## Overview

Project ini merupakan automation testing website OrangeHRM menggunakan Cypress dan JavaScript dengan metode Page Object Model (POM).

Website:

* https://opensource-demo.orangehrmlive.com/

---

## Tools

* Cypress
* JavaScript
* VS Code
* Git & GitHub

---

## Fitur yang Diuji

### Login Testing

* Login berhasil
* Login gagal
* Validasi username kosong
* Validasi password kosong

### Forgot Password Testing

* Membuka halaman forgot password
* Input username
* Reset password

### Dashboard & Directory

* Membuka menu directory
* Mencari employee

---

## Command Git

```bash
git add .
git commit -m "Add OrangeHRM Cypress automation tests"
git push
```

---

## Cypress Test

```js
login.inputUsername('Admin')
login.inputPassword('admin123')
login.clickLogin()

login.assertionLogin()
```

---

## Author

**Devi Oktavia Rahayu**
