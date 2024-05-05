'use client'


import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";

export default function PostCard({
    userFullName,
    userName,
    avatarUrl,
    content
}: {
    userFullName: string,
    userName: string,
    avatarUrl: string
    content: string
}
) {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <Card className="bg-transparent shadow-none rounded-none hover:bg-slate-900 transition border-b border-white/20 cursor-pointer">
            <CardHeader className="justify-between">
                <div className="flex gap-2">
                    <Link href={`/${userName}`}>
                        <Avatar size="md" src={avatarUrl} />
                    </Link>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{userName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
                    </div>
                </div>

            </CardHeader>
            <CardBody className="px-3 py-0 text-xs text-white">
                <p>
                    {content}
                </p>

            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-2 items-center justify-center">
                    <button className="flex  gap-1 items-center justify-center">
                        <IconMessageCircle className="w-4 h-4" />
                        <p className="font-semibold text-default-400 text-small">4</p>
                    </button>
                    <button className="flex gap-1 items-center justify-center">
                        <IconRepeat className="w-4 h-4" />
                        <p className="font-semibold text-default-400 text-small">4</p>
                    </button>
                    <button className="flex gap-1 items-center justify-center">
                        <IconHeart className="w-4 h-4" />
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                    </button>
                </div>

            </CardFooter>
        </Card>
    );
}
