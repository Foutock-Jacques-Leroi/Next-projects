import searchParams from "next/navigation";
import info from "@/app/lib/info";


export default async function AccountPage({params, searchParams}) {
    const { accountId } = await params;  // Récupérez accountId depuis params (asynchrone)
    
    // Convertissez accountId en nombre et trouvez l'élément correspondant
    const account = info.find(item => item.id === parseInt(accountId));
    

  return (
    <div>
      <h1>{account?.name}</h1>
      <p>ID : {account?.id}</p>
      <p>Âge : {account?.age}</p>
      <p>Profession : {account?.profession}</p>
    </div>
  );
}