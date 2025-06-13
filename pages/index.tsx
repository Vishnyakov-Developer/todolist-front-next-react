"use client"

import Container from "@/components/container";
import UINav from "@/components/uiKit/UINav";
import UIButton from "@/components/uiKit/UIButton";
import CatalogIcon from "@/components/uiKit/icons/CatalogIcon";
import UIText from "@/components/uiKit/UIText";
import ArrowIcon from "@/components/uiKit/icons/ArrowIcon";
import PlusIcon from "@/components/uiKit/icons/PlusIcon";
import { MainButton } from "@/components/MainButton";
import { useTelegram } from "@/lib/useTelegram";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import requestGetProjects from "../requests/requestGetProjects"
import HeaderWithCounter from "@/components/blocks/HeaderWithCounter";
import { fetchProjects } from "@/store/slices/projects";
import { useAppDispatch } from "@/store/hooks";

import { RootState } from '@/store'
import { useSelector } from 'react-redux';




export default function Home() {
  // const tg = useTelegram();
  const router = useRouter()

  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);


  const projects = useSelector((state: RootState) => state.projects.items) as Project[];

  return (
    <>
      <div>
        <HeaderWithCounter />
        <Container className="my-[23px]">
          <UIText>Мои проекты</UIText>
          <UINav className="mt-[15px]">
            {projects.map(project => 
              <UIButton 
                onClick={() => router.push(`/projects/${project.project_id}`)}
                icon={<CatalogIcon background="#ff2d55" />}
                text={project.project_name}
                secondary={<ArrowIcon />}
            />)}
          </UINav>
          <UINav className="mt-[15px]">
            <UIButton 
              onClick={() => router.push('/projects/add')}
              text={<p className="text-accent_text_color">Создать проект</p>}
              secondary={<PlusIcon />}
            />
          </UINav>
        </Container>
      </div>
      <MainButton text="Создать проект" onClick={() => router.push('/projects/add')} />
      
    </>
  );
}


