"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  views?: number;
  cover?: string;
  author?: string;
  avatar?: string;
};

interface NewsroomProps {
  posts?: BlogPost[];
  loading?: boolean;
}

export default function Newsroom({
  posts = [],
  loading = false,
}: NewsroomProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <header className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_70%_10%,#15573F_0%,#0F4C3A_45%,#0A2A1F_100%)] px-5 pb-[90px] pt-[120px] sm:px-10 sm:pt-[150px]">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-[120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(60,179,113,0.24),transparent_65%)] blur-[20px]"
      />

      <div className="relative mx-auto max-w-[1100px] text-center">
        {/* Eyebrow */}
        <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
          TMO Newsroom
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-[18px] max-w-[760px] font-museo text-4xl font-extrabold leading-[1.02] tracking-[-1.5px] text-white sm:text-[58px] sm:tracking-[-2px]">
          Stories from the corridor.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[560px] font-urbanist text-base leading-[1.6] text-white/70 sm:text-lg">
          News, milestones, and the story of how CMS T&amp;M and Treepz are
          digitising public transport in Lagos.
        </p>

        <div className="mx-auto mt-14 max-w-[1100px] text-left">
          {/* Loading state */}
          {loading && (
            <div className="rounded-2xl border border-dashed border-[#FBC02D]/45 bg-[#FBC02D]/[0.06] px-6 py-[22px] font-urbanist text-sm text-white/85">
              Loading live dispatches from the CMS T&amp;M newsroom…
            </div>
          )}

          {/* Empty state */}
          {!loading && posts.length === 0 && (
            <div className="rounded-2xl border border-[#3CB371]/25 bg-[#0A2A1F]/60 px-6 py-[22px] font-urbanist text-sm text-white/75">
              No dispatches yet — check back soon for updates from the
              corridor.
            </div>
          )}

          {/* Featured post */}
          {featuredPost && !loading && (
            <Card className="my-7 mb-9 overflow-hidden rounded-[24px] border-[#3CB371]/30 bg-[#0A1F18] p-0">
              <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
                {/* Cover */}
                <a
                  href={`/news/${featuredPost.id}`}
                  className="group relative block min-h-[300px] overflow-hidden bg-gradient-to-br from-[#104636] to-[#0A1F18] lg:min-h-[360px]"
                >
                  {featuredPost.cover && (
                    <img
                      src={featuredPost.cover}
                      alt={featuredPost.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Featured badge */}
                  <Badge className="absolute left-5 top-5 border-0 bg-[#FBC02D] px-3 py-1.5 font-urbanist text-xs font-extrabold tracking-[0.5px] text-[#0A1F18] hover:bg-[#FBC02D]">
                    FEATURED
                  </Badge>

                  {/* Title */}
                  <h2 className="absolute bottom-8 left-5 right-5 font-museo text-2xl font-extrabold leading-[1.08] tracking-[-0.7px] text-white sm:text-[28px]">
                    {featuredPost.title}
                  </h2>
                </a>

                {/* Content */}
                <CardContent className="flex flex-col justify-between gap-[22px] p-7 sm:p-8">
                  <div>
                    <div className="mb-[18px] flex flex-wrap items-center gap-2.5">
                      <Badge
                        variant="outline"
                        className="border-[#3CB371]/30 bg-[#3CB371]/[0.14] px-2.5 py-1.5 font-urbanist text-[11.5px] font-bold uppercase tracking-[1px] text-[#7FE0AC]"
                      >
                        {featuredPost.category || "NEWS"}
                      </Badge>

                      {featuredPost.date && (
                        <span className="font-urbanist text-[13px] text-white/60">
                          {featuredPost.date}
                        </span>
                      )}

                      {featuredPost.views !== undefined && (
                        <span className="ml-auto font-urbanist text-xs text-white/50">
                          {featuredPost.views.toLocaleString()} views
                        </span>
                      )}
                    </div>

                    <p className="font-urbanist text-[15.5px] leading-[1.62] text-white/70">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </CardContent>
              </div>

              {/* Author */}
              <div className="border-t border-white/[0.06] px-7 py-6 sm:px-8">
                <div className="flex items-center gap-3">
                  {featuredPost.avatar ? (
                    <img
                      src={featuredPost.avatar}
                      alt={featuredPost.author || "Author"}
                      className="h-10 w-10 rounded-full bg-white/[0.06] object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-[#3CB371]/20" />
                  )}

                  <div>
                    <div className="font-urbanist text-sm font-bold text-white">
                      {featuredPost.author || "—"}
                    </div>
                    <div className="font-urbanist text-xs text-white/50">
                      Correspondent
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Posts grid */}
          {!loading && paginatedPosts.length > 0 && (
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-5 border-t border-dashed border-white/[0.08] pt-[30px]">
              <Button
                type="button"
                variant="outline"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((page) => Math.max(1, page - 1))
                }
                className="gap-2.5 rounded-[14px] border-[#3CB371]/30 bg-[#0A2A1F]/60 font-urbanist font-bold text-white hover:bg-[#3CB371]/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex flex-1 items-center justify-center gap-3">
                <span className="font-urbanist text-sm font-bold text-white">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                className="gap-2.5 rounded-[14px] border-[#3CB371]/30 bg-[#0A2A1F]/60 font-urbanist font-bold text-white hover:bg-[#3CB371]/10 hover:text-white"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NewsCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border-[#3CB371]/20 bg-[#0A1F18] p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[#3CB371]/40">
      <a href={`/news/${post.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#104636] to-[#0A1F18]">
          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <Badge className="absolute left-4 top-4 border-0 bg-[#3CB371]/90 font-urbanist text-[10px] font-bold uppercase tracking-wide text-[#062218]">
            {post.category || "NEWS"}
          </Badge>
        </div>

        <CardContent className="p-5">
          <div className="mb-2 flex items-center gap-2">
            {post.date && (
              <span className="font-urbanist text-xs text-white/50">
                {post.date}
              </span>
            )}
          </div>

          <h3 className="font-museo text-xl font-extrabold leading-tight tracking-[-0.4px] text-white transition-colors group-hover:text-[#7FE0AC]">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-3 font-urbanist text-sm leading-relaxed text-white/60">
            {post.excerpt}
          </p>
        </CardContent>
      </a>
    </Card>
  );
}
