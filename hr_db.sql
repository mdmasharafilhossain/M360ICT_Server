--
-- PostgreSQL database dump
--

\restrict LroXy5uPWTfR4J6Iwq1Huv9XkHoYyJTQIWebgoKPxCAnMVFQQgaBgqLG9BdkrYj

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-02-08 18:40:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 228 (class 1259 OID 25409)
-- Name: attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attendance (
    id integer NOT NULL,
    employee_id integer,
    date date NOT NULL,
    check_in_time time without time zone NOT NULL
);


ALTER TABLE public.attendance OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 25408)
-- Name: attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.attendance_id_seq OWNER TO postgres;

--
-- TOC entry 4961 (class 0 OID 0)
-- Dependencies: 227
-- Name: attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attendance_id_seq OWNED BY public.attendance.id;


--
-- TOC entry 226 (class 1259 OID 25389)
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    age integer NOT NULL,
    designation character varying(255) NOT NULL,
    hiring_date date NOT NULL,
    date_of_birth date NOT NULL,
    salary numeric(8,2) NOT NULL,
    photo_path character varying(255),
    deleted_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 25388)
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employees_id_seq OWNER TO postgres;

--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 225
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- TOC entry 224 (class 1259 OID 25370)
-- Name: hr_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hr_users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.hr_users OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 25369)
-- Name: hr_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hr_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.hr_users_id_seq OWNER TO postgres;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 223
-- Name: hr_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hr_users_id_seq OWNED BY public.hr_users.id;


--
-- TOC entry 220 (class 1259 OID 25298)
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25297)
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_id_seq OWNER TO postgres;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 219
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- TOC entry 222 (class 1259 OID 25306)
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 25305)
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNER TO postgres;

--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 221
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- TOC entry 4783 (class 2604 OID 25412)
-- Name: attendance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance ALTER COLUMN id SET DEFAULT nextval('public.attendance_id_seq'::regclass);


--
-- TOC entry 4780 (class 2604 OID 25392)
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- TOC entry 4777 (class 2604 OID 25373)
-- Name: hr_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hr_users ALTER COLUMN id SET DEFAULT nextval('public.hr_users_id_seq'::regclass);


--
-- TOC entry 4775 (class 2604 OID 25301)
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- TOC entry 4776 (class 2604 OID 25309)
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- TOC entry 4955 (class 0 OID 25409)
-- Dependencies: 228
-- Data for Name: attendance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attendance (id, employee_id, date, check_in_time) FROM stdin;
2	1	2025-02-09	10:05:00
3	2	2025-02-09	10:25:00
\.


--
-- TOC entry 4953 (class 0 OID 25389)
-- Dependencies: 226
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employees (id, name, age, designation, hiring_date, date_of_birth, salary, photo_path, deleted_at, created_at, updated_at) FROM stdin;
1	MD Mashrafil Hossain Mahi	25	Software Engineer	2026-01-15	2000-08-19	40000.00	1770488835663-Screenshot (6).png	\N	2026-02-08 00:21:25.970954+06	2026-02-08 00:27:15.666+06
2	MD Hemal	26	Software Engineer	2026-01-15	2000-08-19	40000.00	1770488902532-Screenshot (6).png	\N	2026-02-08 00:28:22.535914+06	2026-02-08 00:28:22.535914+06
4	MD Arman	30	Software Engineer	2026-01-15	2000-08-19	40000.00	1770490318185-Screenshot (8).png	\N	2026-02-08 00:51:58.20148+06	2026-02-08 00:51:58.20148+06
3	MD Hemala	36	Software Engineer	2026-01-15	2000-08-19	40000.00	1770489938678-Screenshot (8).png	2026-02-08 00:53:55.427+06	2026-02-08 00:28:26.698904+06	2026-02-08 00:45:38.686+06
\.


--
-- TOC entry 4951 (class 0 OID 25370)
-- Dependencies: 224
-- Data for Name: hr_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hr_users (id, email, password_hash, name, created_at, updated_at) FROM stdin;
1	admin@gmail.com	$2b$10$eTNNuu6KZAj7G8XUkHGRt.1BDNXYe97kp2S3eQQsa0DEl0b/P8sy6	Admin	2026-02-07 23:33:07.361401+06	2026-02-07 23:33:07.361401+06
\.


--
-- TOC entry 4947 (class 0 OID 25298)
-- Dependencies: 220
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
4	001_hr_users.ts	1	2026-02-07 19:40:26.024+06
5	002_employees.ts	1	2026-02-07 19:40:26.03+06
6	003_attendance.ts	1	2026-02-07 19:40:26.037+06
\.


--
-- TOC entry 4949 (class 0 OID 25306)
-- Dependencies: 222
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 227
-- Name: attendance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.attendance_id_seq', 3, true);


--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 225
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employees_id_seq', 4, true);


--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 223
-- Name: hr_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hr_users_id_seq', 1, true);


--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 219
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 6, true);


--
-- TOC entry 4970 (class 0 OID 0)
-- Dependencies: 221
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- TOC entry 4795 (class 2606 OID 25424)
-- Name: attendance attendance_employee_id_date_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_employee_id_date_unique UNIQUE (employee_id, date);


--
-- TOC entry 4797 (class 2606 OID 25417)
-- Name: attendance attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (id);


--
-- TOC entry 4793 (class 2606 OID 25407)
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- TOC entry 4789 (class 2606 OID 25387)
-- Name: hr_users hr_users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hr_users
    ADD CONSTRAINT hr_users_email_unique UNIQUE (email);


--
-- TOC entry 4791 (class 2606 OID 25385)
-- Name: hr_users hr_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hr_users
    ADD CONSTRAINT hr_users_pkey PRIMARY KEY (id);


--
-- TOC entry 4787 (class 2606 OID 25312)
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- TOC entry 4785 (class 2606 OID 25304)
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4798 (class 2606 OID 25418)
-- Name: attendance attendance_employee_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_employee_id_foreign FOREIGN KEY (employee_id) REFERENCES public.employees(id) ON DELETE CASCADE;


-- Completed on 2026-02-08 18:40:32

--
-- PostgreSQL database dump complete
--

\unrestrict LroXy5uPWTfR4J6Iwq1Huv9XkHoYyJTQIWebgoKPxCAnMVFQQgaBgqLG9BdkrYj

