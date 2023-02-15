const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	staticDirs: ["../public"],
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
		"@storybook/addon-a11y",
		"@storybook/addon-interactions",
	],
	core: {
		builder: {
			name: "webpack5",
		},
	},
	features: {
		interactionsDebugger: true,
	},
	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					"@emotion/core": toPath("node_modules/@emotion/react"),
					"emotion-theming": toPath("node_modules/@emotion/react"),
				},
			},
		};
	},
};
