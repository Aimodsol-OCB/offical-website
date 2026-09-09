import Link from "next/link";
import { User, Calendar, MessageSquare, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

/**
 * Literal port of `<section class="blog_section blog_section_space
 * section_decoration">`.
 */
export default function Blog() {
  return (
    <section className="blog_section blog_section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
          >
            Our Articles
          </div>
          <h2 className="heading_text mb-0">
            Latest <mark>Articles</mark>
          </h2>
        </div>
        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <div className="col-lg-4" key={post.title}>
              <div className="blog_post_block layout_2">
                <div className="blog_post_image">
                  <Link className="image_wrap" href="/blog-details">
                    <img alt={post.title} src={post.image} />
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="blog_post_content p-0">
                  <h3 className="blog_post_title mb-0">
                    <Link href="/blog-details">{post.title}</Link>
                  </h3>
                  <ul className="post_meta unordered_list">
                    <li>
                      <Link href="#!">
                        <User size={14} /> By <b>{post.author}</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <Calendar size={14} /> {post.date}
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <MessageSquare size={14} /> {post.comments}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img alt="" src="/images/shape_line_7.svg" />
      </div>
      <div className="decoration_item shape_image_2">
        <img alt="" src="/images/shape_angle_4.webp" />
      </div>
    </section>
  );
}
