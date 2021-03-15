# @vite/create-app

## Scaffolding Your First Hytd Project

> **Compatibility Note:**
> Hytd requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With NPM:

```bash
$ npm init @hytd/app
```

With Yarn:

```bash
$ yarn create @hytd/app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Hytd + Vue project, run:

```bash
npm init @hytd/app my-vue-app --template vue
```

Currently supported template presets include:

- `vanilla`
- `vue`
- `vue-ts`
- `react`
- `react-ts`

## Community Templates

@hytd/create-app is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Hytd for [community maintained templates](https://github.com/hytd/awesome-hytd#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
