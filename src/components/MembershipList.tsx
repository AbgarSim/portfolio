import {motion} from "framer-motion";
import {Users, ExternalLink, Calendar} from "lucide-react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Membership} from "@/data/memberships";

interface MembershipListProps {
    memberships: Membership[];
}

export function MembershipList({memberships}: MembershipListProps) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {memberships.map((membership, index) => (
                <motion.div
                    key={membership.id}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                >
                    <Card className="h-full hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-accent/50">
                                    <Users className="h-5 w-5 text-accent-foreground"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                                        {membership.organization}
                                    </h3>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Badge variant="secondary" className="mb-3">
                                {membership.roleOrGrade}
                            </Badge>

                            <p className="text-sm text-muted-foreground mb-3">
                                {membership.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3"/>
                                    <span>Since {membership.since}</span>
                                </div>

                                {membership.link && (
                                    <a
                                        href={membership.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                    >
                                        View Certificate
                                        <ExternalLink className="h-3 w-3"/>
                                    </a>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
