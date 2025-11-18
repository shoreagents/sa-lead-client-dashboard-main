-- CreateEnum
CREATE TYPE "public"."user_type_enum" AS ENUM ('Anonymous', 'Regular', 'Admin');

-- CreateEnum
CREATE TYPE "public"."conversation_type_enum" AS ENUM ('Anonymous', 'Authenticated');

-- CreateEnum
CREATE TYPE "public"."message_role_enum" AS ENUM ('User', 'Assistant');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "company" VARCHAR(200),
    "email" VARCHAR(255),
    "phone_number" VARCHAR(20),
    "country" VARCHAR(100),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "auth_user_id" UUID,
    "user_type" "public"."user_type_enum" NOT NULL DEFAULT 'Anonymous',
    "industry_name" VARCHAR(200),
    "first_lead_capture" BOOLEAN DEFAULT false,
    "second_lead_capture" BOOLEAN DEFAULT false,
    "third_lead_capture" BOOLEAN DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pricing_quotes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "session_id" TEXT,
    "quote_timestamp" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "member_count" INTEGER NOT NULL,
    "industry" TEXT NOT NULL,
    "total_monthly_cost" DECIMAL(10,2) NOT NULL,
    "currency_code" VARCHAR(3) NOT NULL DEFAULT 'PHP',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quote_number" INTEGER NOT NULL DEFAULT 1,
    "candidate_recommendations" JSONB DEFAULT '[]',

    CONSTRAINT "pricing_quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."candidate_views" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "candidate_id" VARCHAR(255) NOT NULL,
    "candidate_name" VARCHAR(255),
    "view_duration" INTEGER,
    "page_views" INTEGER DEFAULT 1,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "scroll_percentage" INTEGER DEFAULT 0,

    CONSTRAINT "candidate_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ai_analysis" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "analysis_id" VARCHAR(255),
    "session_id" VARCHAR(255),
    "overall_score" INTEGER,
    "ats_compatibility_score" INTEGER,
    "content_quality_score" INTEGER,
    "professional_presentation_score" INTEGER,
    "skills_alignment_score" INTEGER,
    "key_strengths" JSONB DEFAULT '[]',
    "improvements" JSONB DEFAULT '[]',
    "recommendations" JSONB DEFAULT '[]',
    "improved_summary" TEXT,
    "strengths_analysis" JSONB,
    "salary_analysis" JSONB,
    "career_path" JSONB,
    "section_analysis" JSONB,
    "candidate_profile" JSONB,
    "skills_snapshot" JSONB DEFAULT '[]',
    "experience_snapshot" JSONB,
    "education_snapshot" JSONB,
    "portfolio_links" JSONB DEFAULT '[]',
    "analysis_created_at" TIMESTAMPTZ(6),
    "analysis_updated_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bpoc_employees" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "current_position" VARCHAR(255),
    "position" VARCHAR(255),
    "location" VARCHAR(255),
    "avatar_url" TEXT,
    "bio" TEXT,
    "overall_score" INTEGER DEFAULT 0,
    "skills_snapshot" JSONB DEFAULT '[]',
    "experience_snapshot" JSONB,
    "expected_salary" DECIMAL(10,2),
    "work_status" VARCHAR(100),
    "user_created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "key_strengths" JSONB DEFAULT '[]',
    "improvements" JSONB DEFAULT '[]',
    "recommendations" JSONB DEFAULT '[]',
    "improved_summary" TEXT,
    "strengths_analysis" JSONB,
    "work_status_completed" BOOLEAN DEFAULT false,

    CONSTRAINT "bpoc_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."interview_request" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "candidate_id" VARCHAR(255) NOT NULL,
    "candidate_name" VARCHAR(255) NOT NULL,
    "candidate_position" VARCHAR(255),
    "requester_first_name" VARCHAR(100) NOT NULL,
    "requester_last_name" VARCHAR(100) NOT NULL,
    "requester_email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interview_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pricing_quote_roles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "quote_id" UUID NOT NULL,
    "role_title" TEXT NOT NULL,
    "role_description" TEXT,
    "experience_level" TEXT NOT NULL,
    "workspace_type" TEXT NOT NULL,
    "base_salary_php" DECIMAL(10,2) NOT NULL,
    "multiplier" DECIMAL(3,2) NOT NULL,
    "monthly_cost" DECIMAL(10,2) NOT NULL,
    "workspace_cost" DECIMAL(10,2) NOT NULL,
    "total_cost" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pricing_quote_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_page_visits" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" TEXT NOT NULL,
    "page_path" TEXT NOT NULL,
    "ip_address" TEXT,
    "visit_timestamp" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "visit_count" INTEGER DEFAULT 1,
    "time_spent_seconds" INTEGER DEFAULT 0,
    "last_visit_timestamp" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_page_visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."content_views" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(255),
    "content_type" VARCHAR(50) NOT NULL,
    "content_id" VARCHAR(255) NOT NULL,
    "content_title" VARCHAR(500),
    "content_url" TEXT,
    "page_section" VARCHAR(100),
    "referrer_url" TEXT,
    "referrer_type" VARCHAR(50),
    "view_duration" INTEGER,
    "scroll_depth" INTEGER,
    "viewed_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "interaction_type" VARCHAR(50) DEFAULT 'view',
    "activity_count" INTEGER DEFAULT 1,

    CONSTRAINT "content_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lead_progress" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "previous_status" VARCHAR(50),
    "changed_by" VARCHAR(255),
    "change_reason" VARCHAR(500),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_enrichment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255),
    "job_title" VARCHAR(255),
    "location" VARCHAR(255),
    "bio" TEXT,
    "company_name" VARCHAR(255),
    "company_website" VARCHAR(500),
    "company_domain" VARCHAR(255),
    "company_industry" VARCHAR(255),
    "company_size" VARCHAR(100),
    "company_founded" VARCHAR(50),
    "company_description" TEXT,
    "company_headquarters" VARCHAR(255),
    "linkedin_url" VARCHAR(500),
    "twitter_url" VARCHAR(500),
    "facebook_url" VARCHAR(500),
    "phone_number" VARCHAR(50),
    "additional_emails" TEXT,
    "search_results" TEXT,
    "search_query" VARCHAR(500),
    "enriched_by" VARCHAR(255),
    "enrichment_source" VARCHAR(50) NOT NULL DEFAULT 'serper_api',
    "confidence_score" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company_logo_url" VARCHAR(1000),
    "profile_picture_url" VARCHAR(1000),

    CONSTRAINT "user_enrichment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conversations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(255) NOT NULL,
    "conversation_type" "public"."conversation_type_enum" NOT NULL DEFAULT 'Anonymous',
    "title" VARCHAR(255),
    "context_data" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "migrated_at" TIMESTAMPTZ(6),

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."messages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "conversation_id" UUID NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "role" "public"."message_role_enum" NOT NULL DEFAULT 'User',
    "content" TEXT NOT NULL,
    "context_snapshot" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "public"."users"("user_id");

-- CreateIndex
CREATE INDEX "idx_users_company" ON "public"."users"("company");

-- CreateIndex
CREATE INDEX "idx_users_country" ON "public"."users"("country");

-- CreateIndex
CREATE INDEX "idx_users_email" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "idx_users_first_lead_capture" ON "public"."users"("first_lead_capture");

-- CreateIndex
CREATE INDEX "idx_users_industry_name" ON "public"."users"("industry_name");

-- CreateIndex
CREATE INDEX "idx_users_second_lead_capture" ON "public"."users"("second_lead_capture");

-- CreateIndex
CREATE INDEX "idx_users_third_lead_capture" ON "public"."users"("third_lead_capture");

-- CreateIndex
CREATE INDEX "idx_users_user_id" ON "public"."users"("user_id");

-- CreateIndex
CREATE INDEX "idx_pricing_quotes_candidate_recommendations" ON "public"."pricing_quotes" USING GIN ("candidate_recommendations");

-- CreateIndex
CREATE INDEX "idx_pricing_quotes_industry" ON "public"."pricing_quotes"("industry");

-- CreateIndex
CREATE INDEX "idx_pricing_quotes_quote_number" ON "public"."pricing_quotes"("user_id", "quote_number");

-- CreateIndex
CREATE INDEX "idx_pricing_quotes_user_id" ON "public"."pricing_quotes"("user_id");

-- CreateIndex
CREATE INDEX "idx_candidate_views_candidate_created" ON "public"."candidate_views"("candidate_id", "created_at");

-- CreateIndex
CREATE INDEX "idx_candidate_views_candidate_id" ON "public"."candidate_views"("candidate_id");

-- CreateIndex
CREATE INDEX "idx_candidate_views_candidate_name" ON "public"."candidate_views"("candidate_name");

-- CreateIndex
CREATE INDEX "idx_candidate_views_created_at" ON "public"."candidate_views"("created_at");

-- CreateIndex
CREATE INDEX "idx_candidate_views_scroll_percentage" ON "public"."candidate_views"("scroll_percentage");

-- CreateIndex
CREATE INDEX "idx_candidate_views_user_created" ON "public"."candidate_views"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "idx_candidate_views_user_id" ON "public"."candidate_views"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "unique_user_candidate" ON "public"."candidate_views"("user_id", "candidate_id");

-- CreateIndex
CREATE UNIQUE INDEX "ai_analysis_analysis_id_key" ON "public"."ai_analysis"("analysis_id");

-- CreateIndex
CREATE INDEX "idx_ai_analysis_analysis_id" ON "public"."ai_analysis"("analysis_id");

-- CreateIndex
CREATE INDEX "idx_ai_analysis_created_at" ON "public"."ai_analysis"("created_at");

-- CreateIndex
CREATE INDEX "idx_ai_analysis_overall_score" ON "public"."ai_analysis"("overall_score");

-- CreateIndex
CREATE INDEX "idx_ai_analysis_updated_at" ON "public"."ai_analysis"("updated_at");

-- CreateIndex
CREATE INDEX "idx_ai_analysis_user_id" ON "public"."ai_analysis"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "bpoc_employees_user_id_key" ON "public"."bpoc_employees"("user_id");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_created_at" ON "public"."bpoc_employees"("created_at");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_full_name" ON "public"."bpoc_employees"("full_name");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_location" ON "public"."bpoc_employees"("location");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_overall_score" ON "public"."bpoc_employees"("overall_score");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_position" ON "public"."bpoc_employees"("position");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_user_id" ON "public"."bpoc_employees"("user_id");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_work_status" ON "public"."bpoc_employees"("work_status");

-- CreateIndex
CREATE INDEX "idx_bpoc_employees_work_status_completed" ON "public"."bpoc_employees"("work_status_completed");

-- CreateIndex
CREATE INDEX "idx_interview_request_candidate_id" ON "public"."interview_request"("candidate_id");

-- CreateIndex
CREATE INDEX "idx_interview_request_created_at" ON "public"."interview_request"("created_at");

-- CreateIndex
CREATE INDEX "idx_interview_request_user_id" ON "public"."interview_request"("user_id");

-- CreateIndex
CREATE INDEX "idx_pricing_quote_roles_quote_id" ON "public"."pricing_quote_roles"("quote_id");

-- CreateIndex
CREATE INDEX "idx_content_views_activity_count" ON "public"."content_views"("activity_count");

-- CreateIndex
CREATE INDEX "idx_content_views_content_analytics" ON "public"."content_views"("content_type", "content_id", "viewed_at");

-- CreateIndex
CREATE INDEX "idx_content_views_content_id" ON "public"."content_views"("content_id");

-- CreateIndex
CREATE INDEX "idx_content_views_content_type" ON "public"."content_views"("content_type");

-- CreateIndex
CREATE INDEX "idx_content_views_interaction_analytics" ON "public"."content_views"("content_type", "content_id", "interaction_type");

-- CreateIndex
CREATE INDEX "idx_content_views_interaction_type" ON "public"."content_views"("interaction_type");

-- CreateIndex
CREATE INDEX "idx_content_views_referrer_type" ON "public"."content_views"("referrer_type");

-- CreateIndex
CREATE INDEX "idx_content_views_user_analytics" ON "public"."content_views"("user_id", "viewed_at");

-- CreateIndex
CREATE INDEX "idx_content_views_user_id" ON "public"."content_views"("user_id");

-- CreateIndex
CREATE INDEX "idx_content_views_viewed_at" ON "public"."content_views"("viewed_at");

-- CreateIndex
CREATE UNIQUE INDEX "lead_progress_user_id_key" ON "public"."lead_progress"("user_id");

-- CreateIndex
CREATE INDEX "idx_lead_progress_status" ON "public"."lead_progress"("status");

-- CreateIndex
CREATE INDEX "idx_lead_progress_changed_by" ON "public"."lead_progress"("changed_by");

-- CreateIndex
CREATE UNIQUE INDEX "user_enrichment_user_id_key" ON "public"."user_enrichment"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_enrichment_user_id" ON "public"."user_enrichment"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_enrichment_company" ON "public"."user_enrichment"("company_name");

-- CreateIndex
CREATE INDEX "idx_user_enrichment_enriched_by" ON "public"."user_enrichment"("enriched_by");

-- CreateIndex
CREATE INDEX "idx_conversations_user_id" ON "public"."conversations"("user_id");

-- CreateIndex
CREATE INDEX "idx_conversations_type" ON "public"."conversations"("conversation_type");

-- CreateIndex
CREATE INDEX "idx_conversations_created_at" ON "public"."conversations"("created_at");

-- CreateIndex
CREATE INDEX "idx_conversations_migrated_at" ON "public"."conversations"("migrated_at");

-- CreateIndex
CREATE INDEX "idx_messages_conversation_id" ON "public"."messages"("conversation_id");

-- CreateIndex
CREATE INDEX "idx_messages_user_id" ON "public"."messages"("user_id");

-- CreateIndex
CREATE INDEX "idx_messages_created_at" ON "public"."messages"("created_at");

-- AddForeignKey
ALTER TABLE "public"."pricing_quotes" ADD CONSTRAINT "fk_pricing_quotes_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."candidate_views" ADD CONSTRAINT "candidate_views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ai_analysis" ADD CONSTRAINT "ai_analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."bpoc_employees"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."interview_request" ADD CONSTRAINT "interview_request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."pricing_quote_roles" ADD CONSTRAINT "fk_pricing_quote_roles_quote_id" FOREIGN KEY ("quote_id") REFERENCES "public"."pricing_quotes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."lead_progress" ADD CONSTRAINT "lead_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."user_enrichment" ADD CONSTRAINT "user_enrichment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."messages" ADD CONSTRAINT "messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
