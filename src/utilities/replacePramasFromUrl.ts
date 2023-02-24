export default function replacePramasFromUrl(url: string, valuesToReplace: { [key: string | number]: string }) {
	if (!url) {
		throw new Error('A url was not passed');
	}

	if (!Object.entries(valuesToReplace).length) {
		throw new Error('The object with the values to replace is empty. Example { [id] : "{:userId}" }');
	}

	let newUrl = url;

	for (const key in valuesToReplace) {
		const value = valuesToReplace[key];

		if (!url.includes(value)) {
			throw new Error(`Value not found in given url. { ${key} : ${value} }`);
		}

		newUrl = newUrl.replaceAll(value, key);
	}

	return newUrl;
}
