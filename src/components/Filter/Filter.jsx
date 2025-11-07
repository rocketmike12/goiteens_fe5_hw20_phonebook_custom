import styles from "./Filter.module.scss";

export const Filter = function ({ filterValue, handleFilter }) {
	return (
		<>
			<div className={styles["filter"]}>
				<h2 className={styles["filter__title"]}>Find contacts by name</h2>
				<input type="text" value={filterValue} onChange={handleFilter} className={styles["filter__input"]} />
			</div>
		</>
	);
};
