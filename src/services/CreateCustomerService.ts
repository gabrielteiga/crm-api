import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService{
    async execute({ name, email }: CreateCustomerProps){
        console.log(name);
        console.log(email);

        const customer = await prismaClient.customer.create({
            data:{
                name: name,
                email: email
            }
        });
        
        return customer;
    }
}

export { CreateCustomerService }