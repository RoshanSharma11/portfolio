import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getShortName } from "@/libs/project-themes";
import { getAllProjectIds, getProjectById } from "@/libs/projects";
import { breadcrumbSchema, projectSchema } from "@/libs/structured-data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectIds().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.title} — Case Study`;
  const description = project.longDescription.slice(0, 155);

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.techStack,
      "Roshan Sharma Project",
      project.category,
    ],
    alternates: {
      canonical: `https://roshansharma.net/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://roshansharma.net/projects/${project.id}`,
      images: [
        {
          url: project.image.startsWith("http")
            ? project.image
            : `https://roshansharma.net${project.image}`,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const shortName = getShortName(project.title);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: shortName },
  ];

  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "https://roshansharma.net" },
            { name: "Projects", url: "https://roshansharma.net/projects" },
            {
              name: project.title,
              url: `https://roshansharma.net/projects/${project.id}`,
            },
          ]),
          projectSchema(project),
        ]}
      />
      <article className="min-h-screen px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <ProjectCaseStudy project={project} />
      </article>
    </PageShell>
  );
}
