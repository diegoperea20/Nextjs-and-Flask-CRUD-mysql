# Nextjs and Flask CRUD mysql

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


### [Backend project](https://github.com/diegoperea20/Flask-and-React/tree/main/Backend-Flask)

Same project but using only React [here](https://github.com/diegoperea20/Flask-and-React)

<p align="center">
  <img src=".\README-images\tasks.PNG" alt="StepLast">
</p>

---
POST
<p align="center">
  <img src=".\README-images\addtask.PNG" alt="StepLast">
</p>
<p align="center">
  <img src=".\README-images\addedtask.PNG" alt="StepLast">
</p>

---

PUT
<p align="center">
  <img src=".\README-images\edittask.PNG" alt="StepLast">
</p>
<p align="center">
  <img src=".\README-images\editedtask.PNG" alt="StepLast">
</p>

---

DELETE
<p align="center">
  <img src=".\README-images\deletedtask.PNG" alt="StepLast">
</p>

## Options to implement in backend

1. Use Dockerfile 
2. Use virtual enviroments and apply  requirements.txt 
```python
#virtual enviroment with conda 
conda create -n my_enviroment python=3.11.3

pip install -r requirements.txt

python app.py

#note : create first the container mysql , indications in app.py last lines
```

## Getting Started  Steps to implement in fronted Nextjs

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resolve : Error Nextjs Parsing error: Cannot find module 'next/babel'

Put this code in .eslintrc.json 
```bash
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```