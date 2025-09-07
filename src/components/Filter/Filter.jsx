import { Component } from "react";

import styles from "./Filter.module.scss";

export class Filter extends Component {
	render() {
		return (
			<>
				<div className={styles["filter"]}>
					<h2 className={styles["filter__title"]}>Find contacts by name</h2>
					<input type="text" value={this.props.filterValue} onChange={this.props.handleFilter} className={styles["filter__input"]} />
				</div>
			</>
		);
	}
}
