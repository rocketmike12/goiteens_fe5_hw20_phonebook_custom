import { Component } from "react";

import { Contact } from "./Contact";

import styles from "./ContactList.module.scss";

export const ContactList = function ({ contacts, onCheck, handleDelete }) {
	
		return (
			<>
				<ul className={styles["contact-list"]}>
					{contacts.map((contact) => (
						<Contact
							onCheck={onCheck}
							handleDelete={handleDelete}
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
