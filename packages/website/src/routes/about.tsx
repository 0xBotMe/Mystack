import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "../components/shell";
import { seo } from "../services/seo";

export const Route = createFileRoute("/about")({
	head: () => seo("/about"),
	component: About,
});

function About() {
	return (
		<PageHeading title="About Mystack">
			<p>
				Mystack is an open-source project generator for TanStack Start. It
				connects your choices for runtime, database, email and payments, then
				creates an application whose source you own and can change.
			</p>
		</PageHeading>
	);
}
