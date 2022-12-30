// Recursion : Calling that function inside that function

import React, { useState } from "react";

const Folder = ({ explorer }) => {
	const [expand, setExpand] = useState(false);

	if (explorer.isFolder) {
		return (
			<div style={{ marginTop: 5 }}>
				<div
					className='folder'
					onClick={() => setExpand(!expand)}>
					<span>📁 {explorer.name}</span>
				</div>
				<div
					style={{
						display: expand ? "block" : "none",
						paddingLeft: 20,
					}}>
					{/* Recursion based file mapping */}
					{explorer.items.map((exp, index) => {
						return (
							<Folder
								key={index}
								explorer={exp}
							/>
						);
					})}
				</div>
			</div>
		);
	} else {
		return (
			<span
				className='file'
				style={{ marginLeft: 15 }}>
				📄 {explorer.name}
			</span>
		);
	}
};

export default Folder;
