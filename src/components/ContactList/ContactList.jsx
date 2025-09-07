import { Component } from "react";

import { Contact } from "./Contact";

import styles from "./ContactList.module.scss";

export class ContactList extends Component {
	render() {
		return (
			<>
				<ul className={styles["contact-list"]}>
					{this.props.contacts.map((contact) => (
						<Contact
							onCheck={this.props.onCheck}
							handleDelete={this.props.handleDelete}
							id={contact.id}
							name={contact.name}
							number={contact.number}
							completed={contact.completed}
							key={contact.id}
						/>
					))}
				</ul>
			</>
		);
	}
}
