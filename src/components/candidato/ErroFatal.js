import React, { useContext, useEffect, useState } from 'react';

const ErroFatal = () => {
	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Erro!</h1>
					<p class='lead'>
						Não foi possível buscar sua prova em nosso sistema, favor tentar
						novamente em breve.
						<br></br>
						Agradecemos sua Compreensão!
					</p>
				</div>
			</div>
		</div>
	);
};

export default ErroFatal;
