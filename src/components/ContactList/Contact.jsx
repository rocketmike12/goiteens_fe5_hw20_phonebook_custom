import { Component } from "react";

import { MdDeleteOutline } from "react-icons/md";

import styles from "./ContactList.module.scss";

export class Contact extends Component {
	handleDelete = () => {
		this.props.handleDelete(this.props.id);
	};

	render() {
		return (
			<>
				<li className={styles["contact-list__item"]}>
					<p className={styles["contact-list__text"]}>{this.props.name}: {this.props.number}</p>

					<button className={styles["contact-list__delete"]} onClick={this.handleDelete}>
						<MdDeleteOutline />
					</button>
				</li>
			</>
		);
	}
}
