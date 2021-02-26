import React, { useContext, useEffect, useState } from 'react';

const Agradecimento = () => {
	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Obrigado!</h1>
					<p class='lead'>
						Muito obrigado por sua participação, a equipe de rh entrará em
						contato por <b>email</b> em breve
					</p>
				</div>
			</div>
		</div>
	);
};

export default Agradecimento;
