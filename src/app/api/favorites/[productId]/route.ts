import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface IParams {
    productId?: string;
}

export async function POST(
    request: Request,
    {params} : { params: IParams}
) {
    const currentUser = await getCurrentUser();
    if ( !currentUser )
        return NextResponse.error();

    const {productId} = params;
    console.log('[favorites POST] productId', productId);

    if ( !productId || typeof productId !== 'string')
    {
        throw new Error('[favorites POST] Invalid productId');
    }

    let favoriteids = [ ...(currentUser.favoriteids || [] )];

    favoriteids.push(productId);

    const user = await prisma?.user.update({
        where : {
            id: currentUser.id
        },
        data : {
            favoriteids
        }
    });
    return NextResponse.json(user);
}

export async function DELETE(
    request: Request,
    {params} : { params: IParams}
) {
    const currentUser = await getCurrentUser();
    if ( !currentUser )
        return NextResponse.error();

        
    const {productId} = params;
    console.log('[favorites DELETE] productId', productId);

    if ( !productId || typeof productId !== 'string')
    {
        throw new Error('[favorites DELETE] Invalid productId');
    }

    let favoriteids = [ ...(currentUser.favoriteids || [] )];

    favoriteids = favoriteids.filter((id)=> id !== productId );

    const user = await prisma?.user.update({
        where : {
            id: currentUser.id
        },
        data : {
            favoriteids
        }
    });
    return NextResponse.json(user);
}