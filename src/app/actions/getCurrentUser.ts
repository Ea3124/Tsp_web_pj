import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/helpers/prismadb"

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser(){
    try {
        const session = await getSession();
        if ( !session?.user?.stnum ) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({   
		where: {
                    stnum: session.user.stnum
                }
            });
        console.log("[getCurrentUser] currentUser", currentUser);
        if ( !currentUser ) {
		return null;
    	}
        return currentUser;
    } catch ( error ) {
        return null;
    }
}