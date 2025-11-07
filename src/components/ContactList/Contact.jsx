import { Component } from "react";

import { MdDeleteOutline } from "react-icons/md";

import styles from "./ContactList.module.scss";

export const Contact = function ({ id, name, number, handleDelete }) {
	const handleSelfDelete = () => {
		handleDelete(id);
	};

	
		return (
			<>
				<li className={styles["contact-list__item"]}>
					<p className={styles["contact-list__text"]}>{name}: {number}</p>

					<button className={styles["contact-list__delete"]} onClick={handleSelfDelete}>
						<MdDeleteOutline />
					</button>
				</li>
			</>
		);
}
