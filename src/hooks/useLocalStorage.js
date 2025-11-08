import { useEffect, useState } from "react";

export const useLocalStorage = function ({ key, defaultValue }) {
	if (typeof key !== "string") {
		console.error('Argument "key" must be of type String');
		return [undefined, () => {}];
	}

	const [value, setValue] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : defaultValue;
		} catch {
			return defaultValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
