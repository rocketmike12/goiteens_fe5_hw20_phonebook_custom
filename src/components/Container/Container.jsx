import { Component } from "react";
import styles from "./Container.module.scss";

export class Container extends Component {
	render() {
		return (
			<>
				<div className={styles["container"]}>{this.props.children}</div>
			</>
		);
	}
}
