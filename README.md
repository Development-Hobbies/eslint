## ESLint

### Setup

Initialize package

```bash
	// npm
	npm init -y
	// yarn
	yarn init -y
```

Install eslint

```bash
	// npm
	npm install eslint --save-dev
	// yarn
	yarn add eslint --dev
```

Initialize basic config for eslint


```bash
	// npm
	npx eslint --init
	//yarn
	yarn run eslint --init
```

### Available Rules

[More Rules](https://eslint.org/docs/rules/)

Configure `.eslintrc.{js,yml,json}`

```JSON
{
	"rules": {
		"semi": ["error", "always"],
		"qoutes": ["error", "double"]
	}
}
```

`"off"` === `0`

`"warn"` === `1`

`"error"` === `2`

[More configuration examples](https://eslint.org/docs/user-guide/configuring)

```JSON
{
	"extends": "eslint:recommended"
}
```

Rules with check on this [page](https://eslint.org/docs/rules/) will be extended to your config.

You can use configurations created by the others by extending them. Can be find [here](https://www.npmjs.com/search?q=eslint-config)
