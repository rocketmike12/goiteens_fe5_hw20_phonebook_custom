import { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import { Container } from "./components/Container/Container";

import { ContactEditor } from "./components/ContactEditor/ContactEditor";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";

const App = function () {
	let [contacts, setContacts] = useState([]);
	let [filter, setFilter] = useState("");

	useEffect(() => {
		setContacts(JSON.parse(localStorage.getItem("phonebookContacts")) || []);
	}, []);

	useEffect(() => {});

	const handleAdd = (name, number) => {
		if (!name || !number) return;

		name = name
			.split(" ")
			.map((word) =>
				word
					.split("-")
					.map((el) =>
						el.includes("'")
							? el.slice(0, el.indexOf("'") + 1) + el.charAt(el.indexOf("'") + 1).toUpperCase() + el.slice(el.indexOf("'") + 2).toLowerCase()
							: el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
					)
					.join("-")
			)
			.join(" ");

		if (contacts.filter((contact) => contact.name.toLowerCase() === name.toLowerCase()).length) {
			alert(`${name} is already in contacts`);
			return;
		}

		const newContact = { id: nanoid(), name: name, number: number, completed: false };

		setContacts((currentContacts) => {
			localStorage.setItem("phonebookContacts", JSON.stringify([...currentContacts, newContact]));
			return [...currentContacts, newContact];
		});
	};

	const handleFilter = (e) => {
		setFilter(e.currentTarget.value);
	};

	const handleCheck = (id) => {
		setContacts(
			contacts.map((el) => {
				if (el.id == id) {
					return { ...el, completed: !el.completed };
				}

				return el;
			})
		);
	};

	const handleDelete = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	return (
		<>
			<Container>
				<h1>Contacts</h1>
				<ContactEditor onAdd={handleAdd} />

				<Filter filterValue={filter} handleFilter={handleFilter} />
				{contacts.length > 0 && (
					<ContactList contacts={contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))} onCheck={handleCheck} handleDelete={handleDelete} />
				)}
			</Container>
		</>
	);
};

export default App;
