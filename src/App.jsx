import { Component } from "react";

import { nanoid } from "nanoid";

import { Container } from "./components/Container/Container";

import { ContactEditor } from "./components/ContactEditor/ContactEditor";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";

class App extends Component {
	constructor() {
		super();

		this.state = {
			contacts: [
				{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
				{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
				{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
				{ id: "id-4", name: "Annie Copeland", number: "227-91-26" }
			],
			filter: ""
		};
	}

	handleAdd = (name, number) => {
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

		if (this.state.contacts.filter((contact) => contact.name.toLowerCase() === name.toLowerCase()).length) {
			alert(`${name} is already in contacts`);
			return;
		}

		this.setState((state) => ({
			contacts: [...state.contacts, { id: nanoid(), name: name, number: number, completed: false }],
			filter: state.filter
		}));
	};

	handleFilter = (e) => {
		this.setState({ filter: e.currentTarget.value });
	};

	handleCheck = (id) => {
		this.setState((state) => ({
			contacts: state.contacts.map((el) => {
				if (el.id == id) {
					return { ...el, completed: !el.completed };
				}

				return el;
			}),
			filter: state.filter
		}));
	};

	handleDelete = (id) => {
		this.setState((state) => ({ contacts: state.contacts.filter((contact) => contact.id !== id), filter: state.filter }));
	};

	render() {
		return (
			<>
				<Container>
					<h1>Contacts</h1>
					<ContactEditor onAdd={this.handleAdd} />

					<Filter filterValue={this.state.filter} handleFilter={this.handleFilter} />
					<ContactList
						contacts={this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))}
						onCheck={this.handleCheck}
						handleDelete={this.handleDelete}
					/>
				</Container>
			</>
		);
	}
}

export default App;
