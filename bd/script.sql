CREATE TABLE infoc_tht_lugar (
      id_lugar             int primary key not NULL AUTO_INCREMENT,
      nm_lugar             varchar (100),
      ds_avaliacao         decimal (10,5),
      ds_edereco           varchar (100),
      ds_imagem            varchar(255),
      ds_informacao        varchar(100),
      dt_dias              Datetime,
      dt_horario           Datetime
); 

CREATE TABLE infoc_tht_chat (
	id_mensagem 	INT primary key not NULL AUTO_INCREMENT,
	nm_nome        varchar(10),
	ds_mensagem    varchar(100),
	dt_messagem    DATETIME 
); 

CREATE TABLE infoc_tht_pacote (
	id_pacote 		INT primary key not NULL AUTO_INCREMENT,
	nm_pacote 		varchar(100),
	dt_data 		DATEtime,
	ds_ingresso     varchar(10) ,
	vl_preco 		DECIMAL ,
	ds_horario 		DATETIME,
	ds_refeicao     bool,
	ds_cancelamento varchar(115) ,
	ds_endereco     varchar(115),
	ds_acesso 		varchar(115) ,
	ds_imagem 		varchar(255),
	ds_link 		varchar(255) 
);



CREATE TABLE infoc_tht_cartao (
	id_cartao         INT primary key not NULL AUTO_INCREMENT,
	nr_cartao         INT (16),
	nm_cartao         INT(12),
	mr_parcela        INT(10),
	nr_parcela        INT(10)
);



CREATE TABLE infoc_tht_usuario (
	id_usuario         INT primary key not NULL AUTO_INCREMENT,
	id_cartao          INT, 
	nm_usuraio         varchar(30),
	nm_nick            varchar(10),
	ds_email           varchar(20), 
	nr_cpf             INT(11), 
	dt_nascimento      DATETIME,
	ds_senha           INT, 
    FOREIGN KEY (id_cartao) references infoc_tht_cartao(id_cartao)
	
);

CREATE TABLE infoc_tht_compra (
	id_compra		INT primary key not NULL AUTO_INCREMENT,
	id_pacote 		INT,
	id_usuario 		INT, 
	ds_aprovacao 	bool,
  
    FOREIGN KEY (id_pacote) references infoc_tht_pacote(id_pacote),
    FOREIGN KEY (id_usuario) references infoc_tht_usuario(id_usuario)
);

select*from infoc_tht_lugar;
select*from infoc_tht_chat;
select*from infoc_tht_pacote;
select*from infoc_tht_cartao;
select*from infoc_tht_usuario;
select*from infoc_tht_compra;