PGDMP                         {            Terion    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    92446    Terion    DATABASE     {   CREATE DATABASE "Terion" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE "Terion";
                postgres    false            �            1259    92455    manufacturer    TABLE     s  CREATE TABLE public.manufacturer (
    "MF_Id" character varying NOT NULL,
    "M_Email" character varying NOT NULL,
    "M_Phone_No" integer,
    "M_Pan_Number" character varying,
    "M_Aadhar_Number" character varying,
    "M_Name" character varying,
    "M_Position" character varying,
    "M_Alternate_Phone_No" integer,
    "M_User_Name" character varying,
    "M_Password" character varying,
    "M_Business_Type" character varying,
    "M_GST_Number" character varying,
    "M_Organization_Name" character varying,
    "M_Account_Name" character varying,
    "M_Account_Number" character varying,
    "M_Linked_Phone_no" integer,
    "M_Pass_Img" character varying,
    "M_Upi_Id" character varying,
    "M_PR_Street_Address" character varying,
    "M_PR_City" character varying,
    "M_PR_State" character varying,
    "M_PR_PostalCode" integer,
    "M_CD_Street_Address" character varying,
    "M_CD_City" character varying,
    "M_CD_State" character varying,
    "M_CD_PostalCode" integer,
    "M_DS_Id" character varying,
    "M_Amount" integer,
    "M_Updated_On" time with time zone,
    "M_Updated_By" character varying
);
     DROP TABLE public.manufacturer;
       public         heap    postgres    false            �          0    92455    manufacturer 
   TABLE DATA             COPY public.manufacturer ("MF_Id", "M_Email", "M_Phone_No", "M_Pan_Number", "M_Aadhar_Number", "M_Name", "M_Position", "M_Alternate_Phone_No", "M_User_Name", "M_Password", "M_Business_Type", "M_GST_Number", "M_Organization_Name", "M_Account_Name", "M_Account_Number", "M_Linked_Phone_no", "M_Pass_Img", "M_Upi_Id", "M_PR_Street_Address", "M_PR_City", "M_PR_State", "M_PR_PostalCode", "M_CD_Street_Address", "M_CD_City", "M_CD_State", "M_CD_PostalCode", "M_DS_Id", "M_Amount", "M_Updated_On", "M_Updated_By") FROM stdin;
    public          postgres    false    214   3       e           2606    92467    manufacturer Unique_Value_M 
   CONSTRAINT     �   ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT "Unique_Value_M" UNIQUE ("M_Email", "M_Phone_No", "M_Pan_Number", "M_Aadhar_Number", "M_Account_Number", "M_Upi_Id", "M_CD_PostalCode", "M_PR_PostalCode");
 G   ALTER TABLE ONLY public.manufacturer DROP CONSTRAINT "Unique_Value_M";
       public            postgres    false    214    214    214    214    214    214    214    214            g           2606    92461    manufacturer manufacturer_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY ("MF_Id");
 H   ALTER TABLE ONLY public.manufacturer DROP CONSTRAINT manufacturer_pkey;
       public            postgres    false    214            �      x������ � �     