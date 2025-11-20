// Define um "escopo" para todas as chaves de contatos
const contactsKeys = {
  // Chave para a lista de todos os contatos
  all: ["contacts"] as const,

  // Chave para a lista com filtros (ex: busca)
  lists: (filters: string) => [...contactsKeys.all, "list", filters] as const,

  // Chave para um contato específico por ID
  detail: (id: string) => [...contactsKeys.all, "detail", id] as const,
};

export { contactsKeys };
